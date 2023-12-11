document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = ''; // Menyimpan input saat ini

    // Fungsi untuk menampilkan input ke layar
    function updateDisplay() {
        display.innerText = currentInput;
    }

    // Ambil semua tombol dengan class "btn-number" dan "btn-operator"
    const buttons = document.querySelectorAll('.btn-number, .btn-operator');

    // Tambahkan event listener ke setiap tombol
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            // Memastikan yang diklik adalah angka atau operator
            if (!isNaN(value) || value === '.' || value === '(' || value === ')') {
                currentInput += value; // Tambahkan angka atau operator ke input saat ini
                updateDisplay(); // Perbarui tampilan layar
            } else if (value === 'C') {
                currentInput = ''; // Reset input
                updateDisplay(); // Perbarui tampilan layar
            }
        });
    });

    // Logika untuk tombol "="
    const equalButton = document.getElementById('equal');
    equalButton.addEventListener('click', () => {
        try {
            const result = eval(currentInput); // Evaluasi ekspresi matematika
            currentInput = result.toString(); // Simpan hasil evaluasi sebagai input baru
            updateDisplay(); // Perbarui tampilan layar
        } catch (error) {
            // Tangani kesalahan jika terjadi
            currentInput = 'Error';
            updateDisplay();
        }
    });

    // Logika untuk tombol "backspace"
    const backspaceButton = document.getElementById('backspace');
    backspaceButton.addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1); // Hapus satu karakter dari input
        updateDisplay(); // Perbarui tampilan layar
    });
});
