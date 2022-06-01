function submitData() {
  let nama = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  let dataObject = {
    nama: nama,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  if (nama == "") {
    return alert("Nama wajib diisi");
  } else if (email == "") {
    return alert("Email wajib diisi");
  } else if (phone == "") {
    return alert("Phone wajib diisi");
  } else if (subject == "") {
    return alert("Subject wajib diisi");
  } else if (message == "") {
    return alert("Message wajib diisi");
  }

  let emailReciever = "williamkurniawan10@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailReciever}?subject=${subject}&body=Hello My Name ${nama} ${message} please Contact Me For More Info ${phone}`;
  a.click();

  console.log(dataObject());
}
