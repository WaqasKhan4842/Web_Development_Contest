import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';
import Promotions from './Promotions';
// import BookMovie from './BookMovie';
// import BookFlight from './BookFlight';
// import BookEvent from './BookEvent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>  {/* Make sure Router wraps the whole app */}
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/promotions" element={<Promotions />}/>
          {/* <Route path="/book-movie" element={<BookMovie />} />
          <Route path="/book-flight" element={<BookFlight />} />
          <Route path="/book-event" element={<BookEvent />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


