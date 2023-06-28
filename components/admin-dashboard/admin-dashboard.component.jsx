import React, { useState, useEffect } from "react";
import * as S from "./admin-dashboard.styles";
import {
  getAttendingTimesByUser,
  getModules,
  getTodayShiftsByUsers,
} from "../../lib/uar-api-utils";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Grid } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [dateValue, setDateValue] = useState(dayjs());
  const [firstChartData, setFirstChartData] = useState(null);
  const [secondChartData, setSecondChartData] = useState(null);

  const handleGetModules = async () => {
    const res = await getModules();
    // console.log("res :>> ", res);
    setModules(res?.data);
  };

  const getShiftsByUser = async () => {
    // console.log("dateValue :>> ", dateValue);
    const res = await getTodayShiftsByUsers(
      dayjs(dateValue).format("YYYY-MM-DD"),
      selectedModule
    );
    // console.log("res :>> ", res);
    const labels = res.data.map(({ user }) => user);
    // console.log("labels :>> ", labels);
    const datasets = [
      {
        label: "Completados",
        data: res.data.map(({ completedCount }) => completedCount),
        backgroundColor: "rgba(29, 135, 26, 0.5)",
      },
      {
        label: "Cancelados",
        data: res.data.map(({ cancelledCount }) => cancelledCount),
        backgroundColor: "rgba(211, 47, 47, 0.4)",
      },
    ];
    setFirstChartData({ labels, datasets });
    // console.log("datasets :>> ", datasets);
  };

  const getAttendingTimes = async () => {
    const res = await getAttendingTimesByUser(
      dayjs(dateValue).format("YYYY-MM-DD"),
      selectedModule
    );

    // console.log("res :>> ", res);
    const labels = res.data.map(({ user }) => user);
    const datasets = [
      {
        label: "Tiempo de atención en minutos",
        data: res.data.map(({ attendingAverage }) => attendingAverage),
        backgroundColor: "rgba(106, 130, 174, 0.5)",
      },
    ];
    setSecondChartData({ labels, datasets });
  };

  const handleChangeService = (service) => {
    console.log("service :>> ", service);
    setSelectedModule(service);
  };

  useEffect(() => {
    handleGetModules();
    getShiftsByUser();
    getAttendingTimes();
  }, [dateValue, selectedModule]);
  return (
    <S.Wrapper>
      <S.StyledBox style={{ marginBottom: "1rem" }}>
        {/* <S.Title>Turnos por fech</S.Title> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.StyledSelect
              items={modules}
              titleKey="name"
              valueKey="_id"
              label="Módulos"
              defaultValue=""
              placeholder="Todos los módulos"
              onChange={handleChangeService}
            />
          </Grid>
        </Grid>
      </S.StyledBox>
      <Grid container>
        <Grid item xs={12}>
          <S.Title>Turnos por fecha</S.Title>
          {firstChartData && (
            <Bar
              options={{
                responsive: true,
              }}
              data={firstChartData}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <S.Title>Tiempo de atención promedio</S.Title>
          {secondChartData && (
            <Bar
              options={{
                responsive: true,
              }}
              data={secondChartData}
            />
          )}
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default AdminDashboard;
