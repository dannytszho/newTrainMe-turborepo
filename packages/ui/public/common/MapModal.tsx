import GoogleMaps from 'ui/public/common/GoogleMaps'
const MapModal = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <div className="grid grid-cols-1 relative shadow w-[227px] h-[240px] m-6 border-1 rounded-lg bg-white">
        <button className="text-black flex justify-end mr-2" onClick={onClick}>
          x
        </button>
        <GoogleMaps />
      </div>
    </>
  )
}

export default MapModal
