import "./contact.css"
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div class="container">
        <div style={{textAlign:'center'}}>
          <h2 className="mt-2">تماس با ما</h2>
        </div>
        <div class="row">
          <div class="column">
            <img style={{marginRight:'25%',width:"360px",height:'360px'}} src="https://www.w3schools.com/w3images/map.jpg" alt="نقشه" />
          </div>
          <div class="column">
            <form action="/action_page.php">
             <Input type="text" placeholder="نام..." />
             <Input type="text" placeholder="نام خانوادگی..." />
              <textarea
                placeholder="پیام..."
                style={{height:'170px'}}
              ></textarea>
             <Button type="primary-lg">فرستادن</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
