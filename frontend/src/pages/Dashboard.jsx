import "../styles/dashboard.css";

function Dashboard() {

    const cards = [
        {
            title: "Faculty",
            count: 125,
            color: "primary",
            icon: "bi-person-workspace"
        },
        {
            title: "Students",
            count: 3560,
            color: "success",
            icon: "bi-mortarboard"
        },
        {
            title: "Subjects",
            count: 210,
            color: "warning",
            icon: "bi-book"
        },
        {
            title: "Publications",
            count: 480,
            color: "danger",
            icon: "bi-journal-text"
        },
        {
            title: "IPR",
            count: 22,
            color: "info",
            icon: "bi-award"
        },
        {
            title: "Events",
            count: 18,
            color: "secondary",
            icon: "bi-calendar-event"
        }
    ];

    return (

        <div className="container-fluid">

            <h2 className="mb-4">Dashboard</h2>

            <div className="row">

                {
                    cards.map((card, index) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={index}>

                            <div className={`card dashboard-card border-${card.color} shadow-sm`}>
                                
                                <div className="card-body">

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div>

                                            <h5>{card.title}</h5>

                                            <h2>{card.count}</h2>

                                        </div>

                                        <i
                                            className={`bi ${card.icon} fs-1 text-${card.color}`}
                                        ></i>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}

export default Dashboard;