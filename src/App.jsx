import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/030.png" />

        <Title title="นาย ปฏิภาณ นิลเอสงฆ์ (บอล)">
          <h3>ตำแหน่ง : IT Support</h3>
        </Title>

        <Title title="ช่องทางติดต่อ">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/06/30").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66939892599
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202030@ssru.ac.th</p>
        </Title>
    
        <Title title="การศึกษา">
          <p>คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="โปรไฟล์">
          <p>ผมสนใจที่จะเรียนรู้งานและหาประสบการณ์เกี่ยวกับการ It Support โดยใช้ความสามารถด้านทางการทดสอบระบบที่มีและความพร้อมที่จะเรียนรู้ตลอดเวลาในการทำงานกับองค์กรนี้</p>
        </Title>

        <Title title="ประสบการณ์การทำงาน">
          <h3>7- Eleven (2564 - 2565)</h3>
          <p>-พนักงานพาร์ทไทม์</p>
          <p>-เป็นพนักงานแคชเชียร์และจัดเรียงสินค้า </p>
          <h3>Youtube (2559 - ปัจจุบัน)</h3>
          <p>-เจ้าของช่อง Youtube : ESZECT เป็น YoutubePartner! กับทาง Google AdSense</p>


        </Title>

        <Title title="ทักษะ">
          <p>การออกแบบแบรนด์และผลิตภัณฑ์</p>
          <p>การผลิตสื่อวิดีโอลง Social Media</p>
          <p>มีความสามารถในการเรียนรู้สิ่งใหม่ตลอดเวลา ๆ </p>
          <p>มีความมุ่งมั่นในการทำงาน</p>
          <p>มีความอดทนในการงาน</p>
          <p>สามารถทำงานเป็นทีมกับผู้อื่นได้ดี</p>
        </Title>
      </div>
    </main>
  )
}

export default App