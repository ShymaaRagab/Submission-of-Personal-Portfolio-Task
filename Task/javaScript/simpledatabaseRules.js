const transactions = [
  {
    date: "27/01/2024",
    id: "#000010",
    des: "",
    Creditor: "",
    credit: 200.0,
    balance: 10300,
  },
  {
    date: "24/01/2024",
    id: "#000009",
    des: "",
    Creditor: "500.00",
    credit: "",
    balance: "10,500",
  },
  {
    date: "24/01/2024",
    id: "#000008",
    des: " مدفوعات العميل #2 شركة الكيان الحديثة للأسمدة فاتورة #000003",
    Creditor: "3,000.01",
    credit: "",
    balance: "10,000",
  },
  {
    date: "23/01/2024",
    id: "#000006",
    des: " مدفوعات العميل #1 مؤسسة زهرة علي جدح الفحطاني للتجارة فاتورة#000002",
    Creditor: "6,000",
    credit: "",
    balance: "7,000",
  },
  {
    date: "21/01/2024",
    id: "#000004",
    des: "",
    Creditor: "1,000",
    credit: "",
    balance: "1,000",
  },
  {
    date: "21/01/2024",
    id: "#000003",
    des: "",
    Creditor: "",
    credit: "500.00",
    balance: "0.00",
  },
  {
    date: "27/01/2024",
    id: "#0000101",
    des: "",
    Creditor: "500.00",
    credit: "",
    balance: "500.00",
  },
];

// Function to render transactions
function renderTransactions() {
  const tableBody = document.getElementById("transactionTableBody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Insert new rows based on the simulated data
  transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${transaction.date}(${transaction.id})
        <p class="description"> ${transaction.des}</p></td>
        <td>${transaction.Creditor}</td>
        <td>${transaction.credit}</td>
        <td>${transaction.balance}</td>
      `;
    tableBody.appendChild(row);
  });
}

// Call the function to render transactions on page load
renderTransactions();
