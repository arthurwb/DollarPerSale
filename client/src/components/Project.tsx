import image_parser from "../util/image_parser";

function renderContent(contentJson: any) {
  try {
    return <p>{contentJson[0].children[0].text}</p>
  } catch (err) {
    console.log(err);
    return <p>[Invalid content]</p>;
  }
}

export default function Project(project: any) {
  project = project.project
  return (
    <div className="border-1 border-(--grey) m-4 max-sm:m-1">
      <div className='p-4'>
        <div className='grid justify-center'>
          <h3 className='text-3xl text-center underline'><a href={project.link} target="_blank">{project.title}</a></h3>
          <div className='flex flex-col items-center'>
            {project.images && project.images
              .split(',')
              .map((url: string, index: number) => (
                <img
                  key={index}
                  src={image_parser(url, 300)}
                  alt={`Project image ${index + 1}`}
                  className='max-h-100 border-1 mt-2 max-w-full'
                />
              ))}
          </div>
        </div>
        <div className='p-6 max-sm:p-1'>
          {renderContent(project.content)}
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#969696' }}>
            <div>Contributors: {project.contributors}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
