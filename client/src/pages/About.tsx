import Contributor from "../components/Contributor";

function About() {
  return (
    <div className="p-2">
        <Contributor
            name="Brooks"
            role="Web Admin, Musician, Photographer"
            about="I've been playing music for a while, I've been making websites for a little bit less time, and I have been taking pictures for a few months. If the website sucks it's my fault."
        ></Contributor>
        <Contributor
          name="Alice Victoria Crimson"
          role="America's least favorite interviewer and seeker of truth"
          about="I'm a witch who uses her connection to the energy of life itself to consider things from alternative perspectives in order to create art that's true to myself and therefore innate. I'm a bit of an attention whore too, so I like to spend time around people and learn about them in order to better my understanding of the mortal experience and how every piece of the puzzle fits together. I'm also just weird as hell :3"
        ></Contributor>
        <Contributor
          name="Jesse"
          role="Musician"
          about="I listen to the radio. I drive 45 minutes to work and back. I have never soldered anything that worked. I don't like pineapple or long sleeve shirts or horses.
I play guitar and drums for $PS, and sometimes they make me sing."
        ></Contributor>
        <Contributor
          name="Lint Lobotomy"
          role="Noise and writing."
          about="I make noise and write long philosophical paragraphs about how my body is a cage.i also don’t understand grammar"
        ></Contributor>
        <Contributor
          name="Tegan"
          role="archivist, musician, artist"
          about="local vampire somewhere at the intersection of noise guitar, underrepresented histories, and too many mediums of art. member of chef salad, craig’s limit, songs for kimchi, and ditch lilies. besides music, she primarily archives original collective materials and writes pecke in the crowne for $PZ."
        ></Contributor>
        <Contributor
          name="Kayden Hauke"
          role="Have You Seen This Beast?, general visuals creation"
          about="I love drawing sentient monsters, then having fictional characters interview them as part of a larger story. Other than that, I read, play video games, and take care of 8 cats"
        ></Contributor>
    </div>
  );
}

export default About;