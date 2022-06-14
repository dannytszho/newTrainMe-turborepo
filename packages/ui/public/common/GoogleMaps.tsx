const GoogleMaps = () => {
  return (
    <iframe
      // eslint-disable-next-line max-len
      width="220"
      height="220"
      allowFullScreen
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1RoHdmFX2YARrRCfMSfDz9c&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}
    />
  )
}

export default GoogleMaps
