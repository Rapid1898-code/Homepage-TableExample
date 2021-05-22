$(function() {
    $(document).ready(function() {
      // $('#example').DataTable();

      $('#example').DataTable( {
        autoWidth: false, //step 1
        columnDefs: [
          { width: '900px', targets: 0 }, //step 2, column 1 out of 4
          { width: '500px', targets: 1 }, //step 2, column 2 out of 4
          { width: '300px', targets: 2 }  //step 2, column 3 out of 4
        ]
      } );

      // $('#example').DataTable( {
      //   select: true
      // } );
    });
  });