---
sidebar_position: 2
---

# Execution


## Initial Situation

You are the IoT representative of the facility team of a watch manufacturer. 
Intelligent light sensors monitor the light to create optimal production conditions for the precision mechanics. 
The connected IoT sensors therefore continuously transmit the current light intensity (every minute) in order to adjust the light intensity if necessary. 

Since only maintenance tasks are carried out at night, the transmission interval of the light intensity can be downgraded (every 15 minutes). 
This should happen completely automatically.



## Provision the IoT Sensor with KEYNOA

```
Hier muss der Onboarding Prozess beschrieben werden
Cloud Configuration, Template erstellen, Gerät attributiesieren
```

## Gerätevorlage erstellen

- Neue Vorlage erstellen
- Attribute der Vorlage hinzufügen
- Cloudeigenschaft: Sendeintervall
- Navigiere zu Geräte und Gerätevorlage zuweisen

## Gerätegruppe erstellen
- Neue Gruppe erstellen
![DevityHub](/img/tb/1.png)
- Gerätevorlage zuweisen
![DevityHub](/img/tb/1.png)
## Auftrag anlegen um Sendeintervall hochsetzen
- Neuer Auftrag erstellen
![DevityHub](/img/tb/1.png)
- Gerätegruppe auswählen
![DevityHub](/img/tb/1.png)
- Auftragseigenschaft
![DevityHub](/img/tb/1.png)
	- Auftragstyp - Cloudeigenschaft
	- Name Eigenschaft - Sendeintervall 
	- Wert - 30 (Minuten)
	- Weiter, Weiter
- Zeitplan aktivieren
![DevityHub](/img/tb/1.png)
	- täglich wiederholen
	- Uhrzeit einstellen
	- Enddatum eingeben
## Auftrag anlegen um Sendeintervall runterzusetzen
## Testen
- Dashboard erstellen
![DevityHub](/img/tb/1.png)
	- Widget hinzufügen
	- Tabelle mit Eigenschaften für Gerät, Sendeintervall beobachten