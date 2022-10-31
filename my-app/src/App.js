
import "../../my-app/src/StyleComponent/App.css"
import { Header } from "./Component/Header";
import { FindTheCare } from "./Component/FindTheCare";
import { Consultant } from "./Component/Consultant";
import { DoctorsSchedule } from "./Component/DoctorsSchedule";
import { MediaCare } from "./Component/MediaCare";
import Medical_Expert from "./Component/Medical_Expert";
import { PatientFeedBack } from "./Component/PatientFeedBack";
import { UpComingEvents_1 } from "./Component/UpComingEvents_1";
import { UpcomingEvents_2 } from "./Component/UpcomingEvents_2";
function App() {
  return (
    <div className="App">
      <Header/>
      <FindTheCare/>
     <Consultant/>
     <DoctorsSchedule/>
     <MediaCare/>
     <Medical_Expert/>
     <PatientFeedBack/>
     <UpComingEvents_1/>
     <UpcomingEvents_2/>
    </div>
  );
}

export default App;
