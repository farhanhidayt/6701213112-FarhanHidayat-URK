<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Aritmatika</title>
    <script>
        function hitungOperasi() {
            // Ambil nilai dari textbox dan dropdown
            var angka1 = parseFloat(document.getElementById('number1').value);
            var operasi = document.getElementById('operation').value;
            var angka2 = parseFloat(document.getElementById('number2').value);
            var hasil;

            // Lakukan operasi aritmatika berdasarkan pilihan operasi
            if (operasi === "+") {
                hasil = angka1 + angka2;
            } else if (operasi === "-") {
                hasil = angka1 - angka2;
            } else if (operasi === "*") {
                hasil = angka1 * angka2;
            } else if (operasi === "/") {
                if (angka2 !== 0) {
                    hasil = angka1 / angka2;
                } else {
                    alert("Pembagian dengan nol tidak diperbolehkan!");
                    return;
                }
            } else {
                alert("Operasi tidak valid!");
                return;
            }

            // Tampilkan hasilnya
            alert("Hasil: " + hasil);
        }
    </script>
</head>
<body>
    <form onsubmit="hitungOperasi(); return false;">
        <label for="number1">Angka 1:</label>
        <input type="number" id="number1" name="number1" required><br><br>

        <label for="operation">Operasi:</label>
        <select id="operation" name="operation" required>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select><br><br>

        <label for="number2">Angka 2:</label>
        <input type="number" id="number2" name="number2" required><br><br>

        <input type="submit" value="Hitung">
    </form>
</body>
</html>
