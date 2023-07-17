import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import Header from "../../components/custom/Header/Header";
import { Content, OverviewSection } from "./Calendar.styles";
import { useEffect, useState } from "react";
import Modal from "../../components/custom/Modal/Modal";
import { BsArrowRightCircleFill } from "react-icons/bs";
import CustomButton from "../../components/custom/CustomButton/CustomButton";
import { getAllInvoices } from "../../redux/invoices/reducer";
import { useDispatch, useSelector } from "react-redux";

const events = [
  { title: "Nissan Cube", start: getDate("2023-07-05") },
  {
    title: "Honda Civic",
    start: getDate("2023-07-14"),
    end: getDate("2023-07-23"),
    color: "#888",
  },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  //   },
  //   {
  //     groupId: "999",
  //     title: "Repeating Event",
  //     start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  //   },
  //   {
  //     title: "Conference",
  //     start: "YEAR-MONTH-17",
  //     end: getDate("YEAR-MONTH-19"),
  //   },
  //   {
  //     title: "Meeting",
  //     start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
  //     end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  //   },
  //   { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  //   { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  //   { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  //   { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  //   { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default function Calendar() {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);
  //   const [selectedEvent, setSelectedEvent] = useState({});

  const toggle = (data) => {
    // setSelectedEvent(data.event._def);
    setModal(!modal);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { invoices, error, loading } = useSelector((state) => ({
    invoices: state.invoices.invoices,
    loading: state.invoices.loading,
    error: state.invoices.error,
  }));

  useEffect(() => {
    dispatch(getAllInvoices());
  }, [dispatch]);

  useEffect(() => {
    if (invoices) {
      let calendarEvents = invoices.map((invoice) => ({
        title: `${invoice?.items[0]?.listItem?.make} - ${invoice?.customer.name} - $${invoice.total}`,
        start: getDate(invoice.createdAt),
        end: getDate(invoice.dueAt),
        color: "#ff8c00",
      }));
      setData(calendarEvents);
    }
  }, [invoices]);

  return (
    <PageLayout>
      <Header pageTitle="Calendar"></Header>
      <Content>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          themeSystem="Simplex"
          plugins={[dayGridPlugin, interactionPlugin]}
          editable={true}
          selectable={true}
          //   eventClick={toggle}
          events={data}
          //   dateClick={toggle}
          height={"700px"}
        />
      </Content>
      <Modal open={modal} title="Order # 1" onClose={toggle} width="500px">
        <OverviewSection>
          <span>06-06-2023 09:00</span>
          <BsArrowRightCircleFill size={20} />
          <span>10-07-2023 15:00</span>
        </OverviewSection>

        <OverviewSection>
          <div style={{ width: "100%" }}>
            <p>
              <strong>Jason Devieu</strong>
            </p>
            <p>Bahamasbillionaire@gmail.com</p>
          </div>
        </OverviewSection>

        <OverviewSection>
          <div>
            <span>1x</span>
            <span style={{ marginLeft: 10 }}>Nissan Cube</span>
          </div>
          <span>$250.00</span>
        </OverviewSection>

        <OverviewSection>
          <span>Total Incl. taxes</span>
          <strong>$250.00</strong>
        </OverviewSection>

        <OverviewSection>
          <strong>Paid</strong>
          <strong>$0.00</strong>
        </OverviewSection>

        <OverviewSection>
          <strong>Choose color:</strong>
          <ChromePicker
            color={color}
            onChange={(value) => setColor(value.hex)}
          />
        </OverviewSection>

        <div style={{ marginTop: "20px" }}>
          <CustomButton
            outline
            width={150}
            onClick={() => navigate("/invoices/1")}
          >
            View Order
          </CustomButton>
        </div>
      </Modal>
    </PageLayout>
  );
}
