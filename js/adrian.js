class CuentaBancaria {
  constructor(nombre, saldoInicial) {
    this.nombre = nombre;
    this.saldo = saldoInicial;
  }

  consultarSaldo() {
    alert(this.nombre + ", tu saldo actual es: $" + this.saldo.toFixed(2));
  }

  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      alert("Depósito exitoso. Tu nuevo saldo es: $" + this.saldo.toFixed(2));
    } else {
      alert("Monto no válido. Intenta de nuevo.");
    }
  }

  retirar(monto) {
    if (monto > 0) {
      if (monto <= this.saldo) {
        this.saldo -= monto;
        alert("Retiro exitoso. Tu nuevo saldo es: $" + this.saldo.toFixed(2));
      } else {
        alert("No tienes suficiente dinero para hacer ese retiro.");
      }
    } else {
      alert("Monto no válido. Intenta de nuevo.");
    }
  }
}

let miCuenta = new CuentaBancaria("Alejandro", 500);

function mostrarMenu() {
  let opcion = "";

  do {
    opcion = prompt(
      "Bienvenido al Cajero Automático de " + miCuenta.nombre + "\n\n" +
      "1. Consultar saldo\n" +
      "2. Hacer un depósito\n" +
      "3. Hacer un retiro\n" +
      "4. Salir\n\n" +
      "Escribe el número de la opción que deseas:"
    );

    switch (opcion) {
      case "1":
        miCuenta.consultarSaldo();
        break;
      case "2":
        let montoDeposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
        miCuenta.depositar(montoDeposito);
        break;
      case "3":
        let montoRetiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
        miCuenta.retirar(montoRetiro);
        break;
      case "4":
        alert("Gracias por usar el cajero automático.");
        break;
      default:
        alert("Opción no válida. Intenta otra vez.");
    }
  } while (opcion !== "4");
}

mostrarMenu();