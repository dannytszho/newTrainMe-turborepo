import Calendar from 'ui/Calendar'
import Voting from 'ui/public/common/Voting'

const PlayerPortal = () => {
  return (
    <>
      <div className="h-screen bg-gradient-conic from-white via-sky-500 to-sky-500 overflow-y-clip">
        <div className="grid grid-flow-row auto-rows-max sm:grid-cols-5 gap-4">
          <div className="w-[227px] h-[450px] m-6 border-4 rounded-lg bg-white sm:col-start-1 sm:col-end-2">
            <Calendar />
          </div>
          <div className="w-[400px] h-[450px] m-6 border-4 rounded-lg bg-white sm:col-start-3 sm:col-end-4">
            <Voting />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerPortal
