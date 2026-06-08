function About() {
    return(
        <div className="md:grid grid-cols-3 gap-4">
            <div className="about-img-col col-1 mx-auto m-2 p-4 flex">
                <img src="kt.jpg" width={400} className="about-border m-auto"></img>
            </div >
            <div className="col-span-1 text-center mx-auto p-2">
                <p className="about-text tracking-widest p-4">
                    Dollar per Sale is here to lift you up, and to help you lift up others.
                </p>
                <hr />
                <p className="about-text tracking-widest p-4">
                    The collective is comprised of local artists and community members who make music, zines, clothes, comics, events, posters, and patches.
                </p>
                <hr />
                <p className="about-text tracking-widest p-4">
                    $PS started in 2025 as a group of bands that needed a central network. We invest hard work into the local community of artists and creatives in the greater cincinnati area.
                </p>
                <hr />
                <p className="about-text tracking-widest p-4">
                    $PS is now an open art collective, with a zine, a record label, and promotion network. If you feel that your values align with ours, please submit us your work.
                </p>
                <hr />
                <p className="about-text tracking-widest p-4">
                    We advocate for the liberation of all opressed people. Together we will mobilize and make change.
                </p>
            </div>
            <div className="about-img-col col-span-1 mx-auto m-2 p-4 flex">
                <img src="dtb.jpg" width={400} className="about-border m-auto"></img>
            </div>
            

            
        </div>
    )
}

export default About