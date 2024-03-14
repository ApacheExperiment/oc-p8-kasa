

function Slider({ pictures }) {
   
    return (
        <div className="slider">
            {pictures.map((picture) => {
                return (
                    <div
                    >
                        <img
                        src={picture}
                        
                        alt="intérieur du logement"
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default Slider