import CrossMarkIcon from './public/svg/CrossMarkIcon'

const RightMenu = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) => {
  return (
    <>
      {open && (
        <div
          className="inset-0 bg-[rgba(0,0,0,0.4)] 
            z-[999] overflow-hidden fixed opacity-1 transition-opacity ease-in-out duration-800 flex-1"
          onClick={handleClose}
        />
      )}
      <div
        className={`
			bg-white w-[600px] p-[25px] inset-y-0 right-0 z-[1000] h-full fixed overflow-y-hidden transition ease-in-out duration-800 transform 
			${open ? 'translate-x-0' : 'translate-x-full'}
			`}
      >
        <div className="flex justify-end mb-10">
          <div
            className="h-[20px] w-[20px] cursor-pointer"
            onClick={handleClose}
          >
            <CrossMarkIcon color="#DAE0F6" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightMenu
