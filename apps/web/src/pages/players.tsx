// eslint-disable-next-line no-unused-vars
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import Player from 'ui/Player';
import { db } from '../../../../firebase';
// import classyGueros from '../public/picture/classyGueros.JPG'

const Players = () => {
  const [players, setPlayers] = useState<any>([]);
  useEffect(() => {
    async function getPlayers() {
      const playerCollection = collection(db, 'train');
      const playerSnapshot = await getDocs(playerCollection);
      const player = playerSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setPlayers(player);
    }
    getPlayers();
  }, []);

  return (
    <div className="h-full mx-10">
      <div>
        <h3>Classy Gueros</h3>
        {/* <Image
          className="mx-auto"
          src={classyGueros}
          width="900px"
          height="600px"
        /> */}
      </div>
      <div className="mx-10">
        <h3>Players</h3>
        <hr />
        <div className="grid grid-cols-2 md:pl-16 lg:pl-20 justify-center md:grid-cols-3 lg:grid-cols-4">
          {players.map((player: any) => (
            <Player
              name={player.name}
              position={player.position}
              number={player.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
