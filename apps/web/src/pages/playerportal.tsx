import Calendar from 'ui/Calendar'
import GoogleMaps from 'ui/public/common/GoogleMaps'

const PlayerPortal = () => {
  return (
    <>
      <div className="h-screen bg-gradient-conic from-white via-sky-500 to-sky-500">
        <div className="grid grid-flow-row auto-rows-max">
          <div className="w-[227px] h-[450px] m-6 border-4 rounded-lg bg-white">
            <Calendar />
          </div>
          {/* <div className="w-[227px] h-[300px] m-6 border-4 rounded-lg bg-white">
            <GoogleMaps />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default PlayerPortal
