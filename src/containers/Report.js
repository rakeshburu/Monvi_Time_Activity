import React from "react";
import Page from "src/components/Page";
import ReportData from "../components/report/ReportComponent";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  table: {
    minWidth: 650,
  },
});

const headers = [
  { label: "Activity Date", key: "activity" },
  { label: "Customer", key: "calories" },
  { label: "Product", key: "fat" },
  { label: "Memo", key: "carbs" },
  { label: "Duration", key: "protein" },
  { label: "Billable", key: "billable" },
];

const rows = [
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:No of Hours Worked",
    carbs: "student moduke",
    protein: 4.0,
    billable: "Yes",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:UI Services",
    carbs: "student moduke",
    protein: 6.0,
    billable: "Yes",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:No of Hours Worked",
    carbs: "student moduke",
    protein: 9.0,
    billable: "No",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:UI Services",
    carbs: "student moduke",
    protein: 3.0,
    billable: "Yes",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:UI Services",
    carbs: "student moduke",
    protein: 7.0,
    billable: "No",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:UI Services",
    carbs: "student moduke",
    protein: 7.0,
    billable: "No",
  },
  {
    activity: "11/01/2020",
    calories: "Cosmas Majachani",
    fat: "Off-Shore:UI Services",
    carbs: "student moduke",
    protein: 7.0,
    billable: "No",
  },
];

export default function Report() {
  const classes = useStyles();

  const [rowData, setRowData] = React.useState([]);

  const getReport = () => {
    axios
      .get("/user", {
        params: {
          ID: 12345,
        },
      })
      .then(function(response) {
        console.log(response);
        setRowData(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    console.log("Run useEffect");
    getReport();
  }, []);

  const exportAsPdf = () => {
    var doc = new jsPDF();
    autoTable(doc, { html: "#table-data" });
    doc.save("table.pdf");
  };
  const printTable = () => {
    var content = document.getElementById("table-data-container");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    console.log("content", content.innerHTML);
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };
  return (
    <Page className={classes.root} title="Report">
      <iframe
        id="ifmcontentstoprint"
        style={{ height: "0px", width: "0px", position: "absolute" }}
      ></iframe>
      <div id="test-test"></div>
      <Grid item xs={12}>
        <ReportData
          exportAsPdf={exportAsPdf}
          printTable={printTable}
          headers={headers}
          data={rows}
        />
      </Grid>
    </Page>
  );
}
