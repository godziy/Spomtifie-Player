import React from 'react'
// import { useRecoilValue } from 'recoil'
// import { playlistState } from "../atoms/playlistAtom"
// import { Song } from "./Song"
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

function Songs() {
    const playlist = useRecoilValue(playlistState);

//   return (
//     <div className='px-8 flex flex-col space-y-1 pb-28 text-white '>
//         {playlist?.tracks.items.map((track, i) => (
//            <Song key={track.track.id} track={track} order={i} />
//            //<div>{track.track.name}</div>
//         ))}
//     </div>
//   )
  return (
    <div className="px-6 flex flex-col mt-3 space-y-2 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
}

export default Songs



// function Songs() {
//   const playlist = useRecoilValue(playlistState);

//   return (
//     <div className="px-6 flex flex-col mt-3 space-y-2 pb-28 text-white">
//       {playlist?.tracks.items.map((track, i) => (
//         <Song key={track.track.id} track={track} order={i} />
//       ))}
//     </div>
//   );
// }

// export default Songs;