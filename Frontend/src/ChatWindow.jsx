import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
    return (
        <div className="ChatWindow">
            <div className="navbar">
            <span>Aivora <i class="fa-solid fa-chevron-down"></i></span>
            <div className="userIconDiv">
                <span className="userIcon"><i class="fa-solid fa-user"></i></span>
            </div>
            </div>
            <Chat></Chat>
            <div className="chatInput">
            <div className="userInput">
                <input placeholder="Ask anything">

                </input>
                <div id="submit"><i class="fa-solid fa-paper-plane"></i></div>
            </div>
            <p className="info">
            Aivora can make mistakes. Check important info. See Cookie Preferences.
            </p>
            </div>
        </div>
    );
}

export default ChatWindow;