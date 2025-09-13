export default function image_parser(origin: string, size: number) {
    let output = ""

    if (origin.includes('drive.google.com')) {
        const new_origin = origin.split("/");
        output = "https://drive.google.com/thumbnail?id=" + new_origin[5] + "&sz=w" + size;
        console.log(output);
        return output
    }
    return origin;
}