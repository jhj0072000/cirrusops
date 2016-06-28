// CONTACT US
$('#contactTime').timepicker({
  defaultTime: false
});
$('#contact-form').bootstrapValidator({
  live: 'disabled',
  message: 'This value is not valid',
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
    FirstName: {
      validators: {
        notEmpty: {
          message: 'The first name is required and cannot be empty'
        }
      }
    },
    LastName: {
      validators: {
        notEmpty: {
          message: 'The last name is required and cannot be empty'
        }
      }
    },
    // phoneNumber: {
    //   validators: {
    //     notEmpty: {
    //       message: 'The phone number is required and cannot be empty'
    //     }
    //   }
    // },
    // contactTime: {
    //   validators: {
    //     notEmpty: {
    //       message: 'The contact time is required and cannot be empty'
    //     }
    //   }
    // },
    email: {
      validators: {
        notEmpty: {
          message: 'The email address is required'
        },
        emailAddress: {
          message: 'The email address is not valid'
        }
      }
    },
    Message: {
      validators: {
        notEmpty: {
          message: 'The Message is required and cannot be empty'
        }
      }
    }
  }
});