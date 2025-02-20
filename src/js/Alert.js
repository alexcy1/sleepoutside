// export default class Alert {
//     constructor() {
//       this.alerts = []
//     }

//     async loadAlerts() {
//       try {
//         const response = await fetch("../json/alerts.json")
//         this.alerts = await response.json()
//       } catch (error) {
//         console.error("Error loading alerts:", error)
//       }
//     }

//     displayAlerts() {
//       const main = document.querySelector("main")
//       if (!main) return

//       const alertList = document.createElement("section")
//       alertList.classList.add("alert-list")

//       this.alerts.forEach((alert) => {
//         const p = document.createElement("p")
//         p.textContent = alert.message
//         p.style.backgroundColor = alert.background
//         p.style.color = alert.color
//         alertList.appendChild(p)
//       })

//       main.prepend(alertList)
//     }

//     async init() {
//       await this.loadAlerts()
//       this.displayAlerts()
//     }
//   }













export default class Alert {
  constructor() {
    this.alerts = [];
  }

  async loadAlerts() {
    try {
      const response = await fetch("../json/alerts.json");
      this.alerts = await response.json();
    } catch (error) {
      console.error("Error loading alerts:", error);
    }
  }

  displayAlerts() {
    const main = document.querySelector("main");
    if (!main) return;

    const alertList = document.createElement("section");
    alertList.classList.add("alert-list");

    this.alerts.forEach((alert) => {
      // Create alert container
      const alertContainer = document.createElement("div");
      alertContainer.classList.add("alert-container");
      alertContainer.style.backgroundColor = alert.background;
      alertContainer.style.color = alert.color;

      // Create alert message
      const p = document.createElement("p");
      p.textContent = alert.message;

      // Create close button
      const closeButton = document.createElement("button");
      closeButton.textContent = "×"; // Close symbol
      closeButton.classList.add("alert-close");
      closeButton.style.marginLeft = "10px"; // Adjust spacing
      closeButton.style.marginTop = "-50px";
      closeButton.style.background = "none";
      closeButton.style.border = "none";
      closeButton.style.color = alert.color;
      closeButton.style.cursor = "pointer";
      closeButton.style.fontSize = "1.2em";

      // Add event listener to close the alert
      closeButton.addEventListener("click", () => {
        alertContainer.remove();
      });

      // Append message and close button to container
      alertContainer.appendChild(p);
      alertContainer.appendChild(closeButton);

      // Append alert container to alert list
      alertList.appendChild(alertContainer);
    });

    main.prepend(alertList);
  }

  async init() {
    await this.loadAlerts();
    this.displayAlerts();
  }
}
