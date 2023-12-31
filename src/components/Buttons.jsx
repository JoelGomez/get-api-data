import Swal from "sweetalert2"

const simpleButtonHandler = () => {
    Swal.fire({
        title: "Simple Button",
        text: "lorem ipsum dolor",
        icon: "question"
    });
}

const primaryButtonHandler = () => {
    Swal.fire({
        title: "Primary Button",
        text: "lorem ipsum dolor",
        icon: "success"
    });
}

const animatedButtonHandler = () => {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Data didn't downloaded", "", "info");
        }
      });
}

export const Buttons = () => {



    return (
        <div className='ui container center' >
            <h1>Siple button</h1>
            <button className='ui button' onClick={simpleButtonHandler}>
                Follow
            </button>
            <h1>Primary button</h1>
            <button className="ui button primary" onClick={primaryButtonHandler} >Primary Button</button>
            <h1>Animated buttons</h1>
            <div className="ui animated button" >
                <div className="visible content">Next</div>
                <div className="hidden content">
                    <i className="right arrow icon"></i>
                </div>
            </div>
            <div className="ui vertical animated button" onClick={animatedButtonHandler} >
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="download icon"></i>
                </div>
            </div>
        </div>
    )
}
