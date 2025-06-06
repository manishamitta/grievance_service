const axios = require('axios');
module.exports = async function () {
    // debugger;
    let { complains, comment, workitems, vendor, workflowhistory, levels, files, poheader } = this.entities;
    //     // if (process.env.VCAP_APPLICATION) {
    //     //     console.log(process.env.VCAP_APPLICATION)
    //     //     if (typeof (process.env.VCAP_APPLICATION) == 'string') {
    //     //         var testvapp = JSON.parse(process.env.VCAP_APPLICATION)
    //     //         console.log(testvapp.uris[0]);
    //     //     }
    //     //     else {
    //     //         var testvapp = process.env.VCAP_APPLICATION
    //     //         console.log(testvapp.uris[0]);
    //     //     }
    //     // }

    //     this.before('READ', 'poheader', async req => {
    //         debugger
    //         var clientno = 'sb-1a02d87c-1406-44ca-8abb-2c8c85049d33!b283732|it-rt-d0fab995trial!b55215';
    //         var secretno = 'a9ad9760-c39a-41b2-adff-8aa1e8dbf2fc$MpvzZJXyyZeLsxTRrOxeer2A6mvhHK-l0NqO3mvFpW8=';
    //         var authno = Buffer.from(clientno + ':' + secretno, 'utf-8').toString('base64');
    //         // var auth = 'MmNjNzI1NGUtY2IzMi00MTU5LWFiNjUtY2U4YTQwODBhY2RkOk5lMk0yYm1EY3BzY3ZsS205TmU5TXRFbms5d3JzckJh';
    //         // var response = await axios.request('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo',
    //         //     {
    //         //         method: 'POST',
    //         //         headers: {
    //         //             'Authorization': 'Basic ' + auth
    //         //         }
    //         //     });
    //         // console.log("response", response);
    //         // console.log("token", response.data.access_token);
    //         // // var apicall = await axios.request(`https://openapi.ariba.com/api/purchase-orders/v1/prod/orders?$filter=(supplierANID eq AN11180858077-T)&apikey=PVUWHfvxeoXJ700gjyDAho2fc4Fm7ZxJ&type=org`,
    //         // var apicall = await axios.request(`https://openapi.ariba.com/api/purchase-orders/v1/prod/orders?apikey=PVUWHfvxeoXJ700gjyDAho2fc4Fm7ZxJ&type=org`,
    //         //     {
    //         //         method: 'GET',
    //         //         headers: {
    //         //             'Authorization': 'Bearer ' + response.data.access_token,
    //         //             'Accept': 'application/json',
    //         //             'X-ARIBA-NETWORK-ID': 'AN11180267057-T',

    //         //         }
    //         //     });
    //         var pourl = 'https://openapi.ariba.com/api/purchase-orders/v1/prod/orders';
    //         var poquery = 'type=org&apikey=PVUWHfvxeoXJ700gjyDAho2fc4Fm7ZxJ&$filter=(supplierANID eq AN11180858077-T)';
    //         var pobasicval = 'Basic MmNjNzI1NGUtY2IzMi00MTU5LWFiNjUtY2U4YTQwODBhY2RkOk5lMk0yYm1EY3BzY3ZsS205TmU5TXRFbms5d3JzckJh';
    //         var pobuyerid = 'AN11180267057-T'
    //         var apicall = await axios.request('https://d0fab995trial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/call',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization':'Basic '+ authno,
    //                 'url': pourl,
    //                 'query': poquery,
    //                 'basic': pobasicval,
    //                 'buyerid': pobuyerid

    //             }
    //         });



    //         console.log("apicall", apicall);
    //         console.log("apicalldata", apicall.data)

    //         let arr = apicall.data.content;

    //         for (var i = 0; i < arr.length; i++) {
    //             var pono = arr[i].documentNumber;
    //             var ven = arr[i].supplierANID;
    //             var amount = arr[i].poAmount.amount.toString();
    //             var type = "PO";
    //             var pan;
    //             if (ven == "AN11180859274-T") {
    //                 pan = "ashhar.raza@peolsolutions.com"
    //             }
    //             else {
    //                 pan = "mitta.manisha@peolsolutions.com"
    //             }
    //             console.log((i + 1) + " iteration");
    //             console.log(pono + " " + ven + " " + amount);
    //             let dataven = { panno: pan, vencode: ven };
    //             let datapo = { pono: pono, vendor: ven, pannum: pan, type: type, amount: amount };
    //             debugger
    //             let updatevendor;
    //             let updatepo;
    //             await cds.transaction(req).run(
    //                 updatevendor = UPSERT.into(vendor).entries(dataven)
    //             );
    //             await cds.transaction(req).run(
    //                 updatepo = UPSERT.into(poheader).entries(datapo)
    //             );


    //         }
    //         // var authinv = 'MDA2Yzg5Y2ItNGM4Ny00NjMyLThiOGMtMzJjOTI2OTg4YWZiOmh5Q2pieWdkQ3dzWlVLclhoTG1OV3psdmVBRVlDV2tL';
    //         // var responseinv = await axios.request('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo',
    //         //     {
    //         //         method: 'POST',
    //         //         headers: {
    //         //             'Authorization': 'Basic ' + authinv
    //         //         }
    //         //     });
    //         // console.log("response", responseinv);
    //         // console.log("token", responseinv.data.access_token);
    //         // var apicallinv = await axios.request(`https://openapi.ariba.com/api/invoice-extraction/v1/prod/invoices?apikey=9ASfZv1r7gPXjszTxSgvNe8hi77OW00Y`,
    //         //     {
    //         //         method: 'GET',
    //         //         headers: {
    //         //             'Authorization': 'Bearer ' + responseinv.data.access_token,
    //         //             'Accept': 'application/json',
    //         //             'X-ARIBA-NETWORK-ID': 'AN11180267057-T',

    //         //         }
    //         //     });
    //         var apiurl = 'https://openapi.ariba.com/api/invoice-extraction/v1/prod/invoices';
    //         var apiquery = 'apikey=9ASfZv1r7gPXjszTxSgvNe8hi77OW00Y';
    //         var basicval = 'Basic MDA2Yzg5Y2ItNGM4Ny00NjMyLThiOGMtMzJjOTI2OTg4YWZiOmh5Q2pieWdkQ3dzWlVLclhoTG1OV3psdmVBRVlDV2tL';
    //         var buyerid = 'AN11180267057-T'
    //         var apicallinv = await axios.request('https://d0fab995trial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/call',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization':'Basic '+ authno,
    //                 'url': apiurl,
    //                 'query': apiquery,
    //                 'basic': basicval,
    //                 'buyerid': buyerid

    //             }
    //         });
    //         console.log("apicallinv", apicallinv);
    //         console.log("apicallinvdata", apicallinv.data)
    //         let inv = apicallinv.data.content;

    //         for (var i = 0; i < inv.length; i++) {
    //             var invno = inv[i].documentNumber;
    //             var type1 = "Invoice";
    //             var ven1 = inv[i].supplierANID;
    //             var amt1 = inv[i].totalAmount.amount;
    //             amt1 = amt1.toString();
    //             var pan1;
    //             if (ven1 == "AN11180859274-T") {
    //                 pan1 = "ashhar.raza@peolsolutions.com"
    //             }
    //             else {
    //                 pan1 = "mitta.manisha@peolsolutions.com"
    //             }
    //             console.log((i + 1) + " iteration");
    //             console.log(invno + " " + ven1 + " " + amt1);
    //             let dataven = { panno: pan1, vencode: ven1 };
    //             let datainv = { pono: invno, vendor: ven1, pannum: pan1, type: type1, amount: amt1 };
    //             debugger
    //             let updatevendor;
    //             let updateinv;
    //             await cds.transaction(req).run(
    //                 updatevendor = UPSERT.into(vendor).entries(dataven)
    //             );
    //             await cds.transaction(req).run(
    //                 updateinv = UPSERT.into(poheader).entries(datainv)
    //             );


    //         }

    //     })

    this.before('CREATE', 'files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `https://9d481b38trial-dev-vendor-grievance-service-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/files(${req.data.ID})/content`
    })

    this.before('READ', 'files', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })
    this.on('UPDATE', 'poheader', async req => {
        console.log("data", req.data)
        var comp = req.data.pono;
        console.log("comp", comp);
        var status = req.data.type;
        console.log("status", status);
        if (status == 'Approved') {
            var comm = req.data.pannum;
            console.log("comm", comm);
            var approvedby = req.data.vendor;
            // approvedby = 'mitta.manisha@peolsolutions.com'
            console.log("approvedby", approvedby);
            var lvl = req.data.amount;
            console.log("lvl", lvl)
            const d = new Date();
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            let select_bd = await SELECT(workflowhistory).where({ complainno: comp, level: lvl })
            console.log("select_bd", select_bd);
            let bd = select_bd[0].Begin_DateAND_Time;
            console.log("bd", bd);
            const startDateParts = bd.split("-").map(Number);
            const endDateParts = formattedDate.split("-").map(Number);
            const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
            const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

            // Calculate the difference in milliseconds
            const differenceInMs = endDate - startDate;

            // Convert milliseconds to days
            const daysDiff = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
            var days = daysDiff.toString();
            let update2 = await UPDATE(complains).set({ cstatus: status }).where({ complainno: comp });
            console.log("update2", update2);
            let post = await INSERT.into(comment).entries({ complainno: comp, comments: comm, createdBy: approvedby });
            console.log("post", post);
            let update1 = await UPDATE(workflowhistory).set({ Notification_Status: status, End_DateAND_Time: formattedDate, Approved_by: approvedby, Days_Taken: days }).where({ complainno: comp, level: lvl });
            console.log("update1", update1);
        }

        else if (status == 'Reverted') {
            var comm = req.data.pannum;
            console.log("comm", comm);
            var approvedby = req.data.vendor;
            // approvedby = 'mitta.manisha@peolsolutions.com'
            console.log("approvedby", approvedby);
            var lvl = req.data.amount;
            console.log("lvl", lvl)
            const d = new Date();
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            let select_bd = await SELECT(workflowhistory).where({ complainno: comp, level: lvl })
            console.log("select_bd", select_bd);
            let bd = select_bd[0].Begin_DateAND_Time;
            console.log("bd", bd);
            const startDateParts = bd.split("-").map(Number);
            const endDateParts = formattedDate.split("-").map(Number);
            const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
            const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

            // Calculate the difference in milliseconds
            const differenceInMs = endDate - startDate;

            // Convert milliseconds to days
            const daysDiff = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
            var days = daysDiff.toString();
            let update2 = await UPDATE(complains).set({ cstatus: status }).where({ complainno: comp });
            console.log("update2", update2);
            let post = await INSERT.into(comment).entries({ complainno: comp, comments: comm, createdBy: approvedby });
            console.log("post", post);
            let update1 = await UPDATE(workflowhistory).set({ Notification_Status: status, End_DateAND_Time: formattedDate, Approved_by: approvedby, Days_Taken: days }).where({ complainno: comp, level: lvl });
            console.log("update1", update1);
        }

    })
    this.on('UPDATE', 'complains', async req => {
        console.log("req", req)
        var status = req.data.wid;
        console.log("status", status);
        var comp = req.data.complainno;
        console.log("comp", comp);
        if (status == 'Approved') {
            let select_wid = await SELECT(complains).where({ complainno: comp })
            console.log("select_wid", select_wid);
            let wid = select_wid[0].wid;
            console.log("wid", wid);
            var client = 'sb-819be368-28b1-4125-b0bd-841702a227a2!b355938|xsuaa!b49390';
            var secret = '23bc238b-0694-4452-81fa-ac271eab968e$XMKouGvdAc0W2xyWHl0JvUWSQI1F58i8HUxwyig-mfc=';
            var auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
            var response1 = await axios.request('https://9d481b38trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + auth1
                    }
                });

            var subp = await axios.request(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances?parentInstanceId=${wid} & status=RUNNING`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + response1.data.access_token,
                    }
                });
            console.log("subp", subp)
            var subid = subp.data[0].id;
            console.log("subid", subid);
            
            var bodyy = {
                "status": "CANCELED",
                "cascade": true
            };
            console.log("bodyy", bodyy);
            var cancelsubp = await axios.request(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances/${subid}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Authorization': 'Bearer ' + response1.data.access_token,
                    },
                    data: bodyy
                });
            console.log("cancelsubp", cancelsubp)
        }

        else if (status == 'react') {
            // console.log('params' , req.params)
            // const { complainno } = req.params[0];
            // console.log('Complain No:', complainno);
            var cstatus1 = req.data.cstatus;
            await UPDATE(complains).set({ cstatus: cstatus1 }).where({ complainno: comp });
        }
    });

    this.on('triggerProcess', async (req) => {
        debugger
        var lvl;
        let result = req.data.data;
        result = JSON.parse(result);
        var comp = result.complainno;
        var compType = result.ccomplain_about
        // var baseurl = testvapp.uris[0];
        var baseurl = "9d481b38trial-dev-vendor-grievance-service-srv.cfapps.us10-001.hana.ondemand.com";
        var cvencode = result.cvencode;

        try {
            console.log("process trigger");
            lvl = '1.0';
            var workitemId;
            var client = 'sb-819be368-28b1-4125-b0bd-841702a227a2!b355938|xsuaa!b49390';
            var secret = '23bc238b-0694-4452-81fa-ac271eab968e$XMKouGvdAc0W2xyWHl0JvUWSQI1F58i8HUxwyig-mfc=';
            var auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
            var response1 = await axios.request('https://9d481b38trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + auth1
                    }
                });
            console.log(response1);
            var bodyy = JSON.parse(JSON.stringify({
                "definitionId": "us10.f38e00betrial.vendorgrievance2.workflowProcess",
                "context": {
                    "complaintno": comp,
                    "filter": `complainttype eq '${compType}'`,
                    "srvurl": baseurl,
                    "cvencode": cvencode
                }

            }));
            console.log(bodyy);
            var response11 = await axios.post(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances`, bodyy,
                {
                    headers: {
                        'Authorization': 'Bearer ' + response1.data.access_token,
                    }
                });
            workitemId = response11.data.rootInstanceId;

            await UPDATE(complains).set({ wid: workitemId }).where({ complainno: comp });
        } catch (error) {
            console.log(error)
        }
    });

};
