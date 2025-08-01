export default function image_parser(origin: string) {
    let output = ""

    if (origin.includes('drive.google.com')) {
        const new_origin = origin.split("/");
        output = "https://drive.google.com/thumbnail?id=" + new_origin[5] + "&sz=w1000";
        console.log(output);
        return output
    }
    return origin;
}