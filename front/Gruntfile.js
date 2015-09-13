module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "dist/app.js": "src/app.js"
            }
        }
    },
    clean: {
      files: ["dist"]
    },
    copy: {
      main: {
        files: [
          { cwd: "bower_components/", src: "**", expand: true, dest: "dist/bower_components/" },
          { cwd: "src", src: "**/*.html", expand: true, dest: "dist/" }
        ]
      }
    },
    jshint: {
      files: ["Gruntfile.js"]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["clean", "jshint", "copy", "babel"]);

};
