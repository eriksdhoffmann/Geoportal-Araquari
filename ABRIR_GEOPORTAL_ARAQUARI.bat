@echo off
chcp 65001 >nul
title Geoportal Araquari — Abrir Mapa Interativo
cd /d "%~dp0"
start "" "%~dp0index.html"
