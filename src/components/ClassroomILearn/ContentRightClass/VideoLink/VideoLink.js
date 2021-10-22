function VideoLink() {
  return (
    <div className='VideoClassroomController'>
      <iframe
        className='iframeClassroomVideo'
        src='https://www.youtube.com/embed/0hfeNPM7piw'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
    </div>
  );
}

export default VideoLink;
