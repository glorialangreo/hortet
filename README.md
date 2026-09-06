# Calendari de l'hort

Visualitzador anual, en català, per planificar el planter, la sembra directa, la plantació i la
collita o floració dels cultius de l'hort. El calendari està ajustat al clima de la Partida de Baiona, a l'Alt
Camp, i inclou filtres combinables per tasca, estació i família, cerca de cultius i una
visualització mensual tipus Gantt amb icones i etiquetes.

## Executar-lo

No té dependències. Obre `index.html` al navegador o inicia un servidor local:

```bash
python3 -m http.server 8000
```

Després visita [http://localhost:8000](http://localhost:8000).

## Fonts agronòmiques

Les dates són orientatives i s’han d’adaptar a la varietat, l’exposició i el temps de cada any.
Per al calçot, el calendari pressuposa que es parteix de ceba mare: es planta directament al camp
entre agost i setembre i es cull de novembre a abril. La referència del cicle tradicional és:
[cultiu del calçot](https://www.calsots.com/los-calsots.html/#cultivo).

## Làmines botàniques

Les il·lustracions actuals han estat aportades específicament per a aquest projecte i no utilitzen
les reproduccions de Wikimedia Commons explorades durant el procés de disseny.

- `assets/hero-banner.jpg`: composició botànica en color de la capçalera.
- `assets/fig-bancal.jpg`: il·lustració del mòdul sobre el clima de la Partida de Baiona.

`index.html` utilitza el tema rosa. `arxiu.html` conserva el tema editorial inicial i comparteix
el mateix `app.js`, de manera que tots dos mantenen les mateixes dades, filtres i interaccions.
