
## VJET

Paul has tried VJET together with Nodeclipse.

![node-vjet-perspective-switching.PNG](Pictures/node-vjet-perspective-switching.PNG)

Eclipse configuration

	<?xml version="1.0" encoding="UTF-8"?>
	<projectDescription>
		<name>NodeExpressProject1</name>
		<comment></comment>
		<projects>
		</projects>
		<buildSpec>
			<buildCommand>
				<name>org.eclipse.vjet.eclipse.core.builder</name>
				<arguments>
				</arguments>
			</buildCommand>
		</buildSpec>
		<natures>
			<nature>org.nodeclipse.ui.NodeNature</nature>
			<nature>org.eclipse.vjet.core.nature</nature>
		</natures>
	</projectDescription>

View in VJET perspective

![node-vjet-script-expoler.PNG](Pictures/node-vjet-script-expoler.PNG)

VJ [JavaScript] Editor has outline (seen on the first picture).

**Running Node.js project is not currently supported**, so you need to switch back to Node perspective.


