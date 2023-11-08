interface AudioComponentProps {
  audioSrc: string;
}

export const AudioComponent = ({ audioSrc }: AudioComponentProps) => {
  return (
    <audio autoPlay >
      <source src={audioSrc} type = "audio/wav" />
      </audio>
  );
};