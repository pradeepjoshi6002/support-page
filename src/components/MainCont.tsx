import "./styles/MainCont.css";
import photo from "../assets/photo.svg";

export default function MainCont() {
  return (
    <div className="main-cont">
      <div className="main-cont-1">contact us</div>
      <div className="main-cont-2">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </div>
      <div className="main-cont-3">
        <div className="main-cont-3-left">
          <div className="mc-3-l-1">
            <button>via support chat</button>
            <button>via call</button>
          </div>
          <button className="mc-3-l-2">via email form</button>
          <form className="mc-3-l-form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea
              className="form-text-area"
              spellCheck="false"
              placeholder="your text"
            ></textarea>
            <div className="form-submit-btn-cover">
              <button className="form-submit-btn">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="main-cont-3-right">
          <img src={photo} alt="call-girl" />
        </div>
      </div>
    </div>
  );
}
