// 14wCATHC6rQL87xxwPagnsq0OkI6a17YPs0dWu0HXAbY
// LoginID	StudentName	Date	Time	Formula
function logAction(loginID, studentName, formula) {
  var $form = $("#myForm");
  var serializedData = $form.serialize();
  serializedData += "&Date=" + new Date();
  console.log(serializedData);
  updateForm($form, "blah", serializedData);
}
// dependencies: uploadStatus div.
function updateForm(form, key, serializedData) {
  var request;
  // abort any pending request
  if (request) {
      request.abort();
  }
  // let's disable the inputs for the duration of the ajax request
  // Note: we disable elements AFTER the form data has been serialized.
  // Disabled form elements will not be serialized.
  //var $inputs = form.find("input, select, button, textarea");
  //$inputs.prop("disabled", true);

  // fire off the request to /form.php
  request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbySb5zPN-EUnkien5DjjPo0qXGnxfwYln_YxzaeHZvInaSukJUB/exec",
      type: "post",
      data: serializedData
  });

  // callback handler that will be called on success
  request.done(function (response, textStatus, jqXHR){
      // log a message to the console
      console.log("Hooray, it worked!");
  });

  // callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown){
      // log the error to the console
      console.error(
          "The following error occured: "+
          textStatus, errorThrown
      );
  });

  // callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {
      // reenable the inputs
      //$inputs.prop("disabled", false);
  });

}
