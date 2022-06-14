const MapModal = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <div
          className="inset-0 bg-[rgba(0,0,0,0.4)] 
              z-[999] overflow-hidden fixed opacity-1 transition-opacity ease-in-out duration-800 flex-1"
        />
      )}
      <div
        className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      ></div>
    </>
  )
}

export default MapModal
