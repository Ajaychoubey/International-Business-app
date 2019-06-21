const inputTicket = document.getElementById('ticket');
const showButton = document.getElementById('show');
const mainBody = document.getElementById('main-body')
showButton.onclick = () => {
    const site = TICKETS[inputTicket.value.toLowerCase()];
    let HTML = '';
    if(site.developed)
    {
        HTML = `
        <div class="">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class='modal-title'>${inputTicket.value.toLowerCase()}</h2>
                        <h2>Ticket cost: $${site.cost}</h2>
                    </div>
                    <div class="modal-body">
                        <h2>Rent :- </h2>

                        <div class='row'>
                            <h3 style='margin-left:15px;'>Site only: $${site.rent.siteOnly}</h3>
                            <h3 style='margin-left:50px;'>Cost of hotel: $${site.costOfHotel}</h3>
                        </div>
                        
                        <div class='row'>
                            <h3 style='margin-left:15px;'>One House: $${site.rent["1House"]}</h3>
                            <h3 style='margin-left:50px;'>Cost of house: $${site.costOfHouse}</h3>
                        </div>
                        
                        
                        <h3>Two House: $${site.rent["2House"]}</h3>

                        <h3>Three House: $${site.rent["3House"]}</h2>
                        
                        <div class='row'>
                            <h3 style='margin-left:15px;'>Hotel: $${site.rent["hotel"]}</h3>
                            <h3 style='margin-left:50px;'>Bank-Mortage-value: $${site.bankMortageValue}</h3>
                        </div>
                        <div class='row' style='margin-top: 30px;'>
                            <h3 style='margin-left: 15px;'>Color:</h3> 
                            <div class='background' style='
                                background: ${site.color};
                                width: 100px;
                                height: 30px;
                            '></div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    `
    }
    else 
    {
        HTML = `
        <div class="" id="modal-id">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class='modal-title'>${inputTicket.value.toLowerCase()}</h2>
                        <h2>Ticket cost: $${site.cost}</h2>
                    </div>
                    <div class="modal-body"> 
                        <div class='row'>
                            <h3 style='margin-left:15px;'>Rent: $${site.rent}</h3>
                            <h3 style='margin-left:50px;'>Bank-mortage-value: $${site.bankMortageValue}</h3>
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <h3>${site.description}</h3>
                    </div>
                </div>
            </div>
        </div>`;
    }
    mainBody.innerHTML = HTML;
}