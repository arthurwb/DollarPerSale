import { useEffect, useState } from "react";

async function getArchive() {
    const res = await fetch(import.meta.env.VITE_SERVER_URL_PROJECT + "zinearchive");
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
}

function yearMonthToDate(code: any) {
    const num = Number(code);
    const year = 2000 + Math.floor(num / 100); // 25 → 2025
    const month = (num % 100) - 1;             // 02 → 1 (JS months are 0-based)

    return new Date(year, month, 1);
}

function ZineArchive() {
    const [archive, setArchive] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getArchive()
            .then(data => {
                console.log(data);
                setArchive(data);
                setLoading(false);
        })
            .catch(err => {
                setError(err.message);
                setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className="text-center">Zine Archive</h1>
            <p className="text-center pb-8">Click on the things to see the archived zines from previous months</p>
            <div className='grid grid-cols-3 gap-1 max-md:grid-cols-1'>
                {[...archive]
                    .sort((a, b) => b.yearMonth - a.yearMonth)
                    .map((item) => {
                    const date = yearMonthToDate(item.yearMonth);

                    return (
                        <a href={item.link} target="_blank" className="block text-center text-[1.8em]"><div key={item.yearMonth} className="border-1 m-2 pb-6">
                            <div>
                                {date.toLocaleString("en-US", {
                                    month: "long",
                                    year: "numeric"
                                })}
                            </div>
                        </div></a>
                    );
                })}
            </div>
        </div>
    );
}

export default ZineArchive