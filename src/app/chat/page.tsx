import Chat from "../components/Chat";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChatPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />  {/* <-- Burası eklendi */}

            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Robotics AI Chat</h1>
                <Chat />
            </main>

            <Footer />  {/* <-- Burası eklendi */}
        </div>
    );
}
