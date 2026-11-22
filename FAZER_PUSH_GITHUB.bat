@echo off
chcp 65001 >nul
title Enviar para o GitHub — Geoportal Araquari
echo ============================================================================
echo   Enviando alteracoes para: https://github.com/eriksdhoffmann/Geoportal-Araquari
echo ============================================================================
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
pause
