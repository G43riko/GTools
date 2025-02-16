import { describe, it } from "@std/testing/bdd";
import { Color } from "@g43/tools";
import { SvgBarDiagram } from "./diagrams/svg-bar-diagram.ts";
import { SvgHolder } from "./svg-holder.ts";

describe("SvgHolder", () => {
    it("Should test simple circle drawing", () => {
        const holder = SvgHolder.createNew({ x: 800, y: 600 })
            .add((factory) =>
                factory
                    .circle()
                    .setFillColor(Color.RED)
                    .setRadius(10)
                    .setCenter(20, 20)
            )
            .add((factory) =>
                factory
                    .arc()
                    .setFillColor(Color.BLUE)
                    .setRadius(10)
                    .setCenter(50, 20)
            )
            .add((factory) =>
                factory
                    .arc()
                    .setFillColor(Color.GREEN)
                    .setRadius(10)
                    .setInnerRadius(5)
                    .setCenter(80, 20)
            )
            .add((factory) =>
                factory
                    .arc()
                    .setFillColor(Color.AQUA)
                    .setRadius(10)
                    .setStartAngle(0.0)
                    .setEndAngle(-Math.PI * 0.2)
                    .setCenter(110, 20)
            )
            .add((factory) =>
                factory
                    .arc()
                    .setFillColor(Color.MAGENTA)
                    .setRadius(40)
                    .setInnerRadius(20)
                    .setStartAngle(Math.PI * 0.1)
                    .setEndAngle(-Math.PI * 0.3)
                    .setCenter(140, 30)
            );

        // holder.append(
        //     new SvgPieDiagram([1, 2, 3, 4, 5, 6, 7], {
        //         x: 100,
        //         y: 100,
        //     }).getWrapperProxy(),
        // );
        // holder.append(
        //     new SvgPieDiagram(
        //         [1, 2, 3, 4, 5, 6, 7],
        //         { x: 200, y: 100 },
        //         50,
        //         30,
        //     ).getWrapperProxy(),
        // );
        // holder.append(
        //     new SvgPieDiagram(
        //         [1, 2, 3, 4, 5, 6, 7],
        //         {
        //             x: 100,
        //             y: 200,
        //         },
        //         50,
        //         30,
        //         Math.PI / 40,
        //     ).getWrapperProxy(),
        // );
        // holder.append(
        //     new SvgPieDiagram(
        //         [1, 2, 3, 4, 5, 6, 7],
        //         {
        //             x: 200,
        //             y: 200,
        //         },
        //         50,
        //         NaN,
        //         Math.PI / 40,
        //     ).getWrapperProxy(),
        // );
        // holder.append(
        //     new SvgPieDiagram(
        //         [1, 2, 3, 4, 5, 6, 7],
        //         { x: 300, y: 100 },
        //         50,
        //     ).setStrokeColor(Color.BLACK).setStrokeWidth(1).getWrapperProxy(),
        // );
        holder.append(
            new SvgBarDiagram(
                { x: 100, y: 400 },
            ).setStrokeColor(Color.BLACK)
                .setStrokeWidth(1)
                .getWrapperProxy(),
        );

        // holder.saveAs(`${__dirname}/test.svg`);
    });
});
