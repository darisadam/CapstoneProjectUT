<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Schedule</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <style>
        body {
            background-color: #4CAF50; /* Green background */
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            border-radius: 8px;
            padding: 20px;
            background-color: #333;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        .doctor {
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 10px;
        }
        .doctor h3 {
            margin: 0;
        }
        .doctor p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<div id="app" class="container">
    <h1>JADWAL DOKTER TERSEDIA</h1>
    <div v-for="doctor in doctors" :key="doctor.name" class="doctor">
        <h3>{{ doctor.name }}</h3>
        <p><strong>{{ doctor.specialty }}</strong></p>
        <p>{{ doctor.schedule }}</p>
    </div>
</div>

<script>
new Vue({
    el: '#app',
    data: {
        doctors: [
            { name: 'dr. WIDIA RINA', specialty: 'DOKTER UMUM', schedule: 'Senin-Kamis, 08:00-12:00' },
            { name: 'dr. ANGGA, Sp.PD', specialty: 'DOKTER SPESIALIS PENYAKIT DALAM', schedule: 'Rabu-Sabtu, 08:00-12:00' },
            { name: 'dr. PURNAMA', specialty: 'DOKTER GIGI', schedule: 'Selasa-Rabu, 08:00-12:00' },
            { name: 'dr. MAULANA, Sp.A', specialty: 'DOKTER SPESIALIS ANAK', schedule: 'Senin-Rabu, 08:00-12:00' },
            { name: 'dr. ARDIS, Sp.OG', specialty: 'DOKTER SPESIALIS KANDUNGAN', schedule: 'Kamis-Sabtu, 08:00-12:00' },
            { name: 'dr. SUMINAH, Sp.KK', specialty: 'DOKTER SPESIALIS KULIT KELAMIN', schedule: 'Kamis-Sabtu, 08:00-12:00' }
        ]
    }
});
</script>

</body>
</html>
