(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var html = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>A RMScreenprint</title>\r\n</head>\r\n<body>\r\n  <h1>Main heading in my document</h1>\r\n  <!-- Note that it is \"h\" + \"1\", not \"h\" + the letters \"one\" -->\r\n  <p>Look Ma, I am coding <abbr title=\"Hyper Text Markup Language\">HTML</abbr>.</p>\r\n</body>\r\n</html>";
console.log(html);
},{}]},{},[1]);
