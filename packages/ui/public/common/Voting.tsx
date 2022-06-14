import { useAuth, useSession } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../../../firebase'
import { collection, addDoc } from 'firebase/firestore/lite'

const Voting = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  const { session } = useSession()
  const [disable, setDisable] = useState(false)

  const addVoteDocument = async (vote: string, user: string) => {
    await addDoc(collection(db, 'votes'), {
      vote,
      user,
    })
  }
  console.log(session)
  return (
    <>
      <div className="h-full text-black flex flex-col justify-center items-center gap-2">
        <h1>Game this week</h1>
        <button
          className="bg-green-400 cursor-pointer rounded-full text-white drop-shadow-lg w-24 h-8"
          onClick={() =>
            addVoteDocument('In', session.publicUserData.identifier)
          }
        >
          In
        </button>
        <button
          className="bg-green-400 cursor-pointer rounded-full text-white drop-shadow-lg w-24 h-8"
          onClick={() =>
            addVoteDocument('Out', session.publicUserData.identifier)
          }
        >
          Out
        </button>
      </div>
    </>
  )
}

export default Voting
