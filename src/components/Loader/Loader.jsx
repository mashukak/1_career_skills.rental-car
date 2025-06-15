import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <RotatingLines
        strokeColor="#4fa94d"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </div>
  );
}
