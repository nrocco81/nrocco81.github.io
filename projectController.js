mainApp.controller('projectController', function($scope) {
   
   $scope.project = {         //sets up default values
      jobNumber: "[Job#]",
      description: "[Description]",
      value: 500,
      month: 1,
      wbs:[
         {id:'1', month1:70, month2:150, month3:90},
         {id:'1.1', month1:80, month2:50, month3:23},
         {id:'1.2', month1:65, month2:200, month3:76},
         {id:'2', month1:75, month2:75, month3:56},
         {id:'2.1', month1:67, month2:85, month3:200}
      ],
      fullName: function() {    //combines two text fields to one
         var projectObject = $scope.project;
         return projectObject.jobNumber + ", " + projectObject.description;
      }
   };
   
   $scope.reset = function(){   //when reset button pressed, sets default values
     $scope.project.jobNumber = "[Job#]";
     $scope.project.description = "[Description]";
     $scope.project.value = 500;
     $scope.project.month = 1;
   }
   
   $scope.student = {
      firstName: "Nick",
      lastName: "Rocco",
      fees:500,
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Spanish',marks:67}
      ],
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
   
});
