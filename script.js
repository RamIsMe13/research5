// Dummy class attendance data
let attendanceData = [];

// Function to submit attendance
function submitAttendance() {
  const studentNumber = document.getElementById('studentNumber').value;
  const absentReason = document.getElementById('absentReason').value;

  // Check if student number is empty
  if (!studentNumber) {
    alert('Please enter a student number');
    return;
  }

  // Add attendance to the data
  attendanceData.push({ studentNumber, absentReason });

  // Clear input fields
  document.getElementById('studentNumber').value = '';
  document.getElementById('absentReason').value = '';

  // Refresh attendance data display
  displayAttendanceData();
}

// Function to display attendance data
function displayAttendanceData() {
  let attendanceHTML = '';
  attendanceData.forEach((attendance) => {
    attendanceHTML += `<p>Student Number: ${attendance.studentNumber}</p>`;
    if (attendance.absentReason) {
      attendanceHTML += `<p>Absent Reason: ${attendance.absentReason}</p>`;
    }
    attendanceHTML += '<hr>';
  });
  document.getElementById('attendanceData').innerHTML = attendanceHTML;
}