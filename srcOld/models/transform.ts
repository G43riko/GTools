import { Mat4, ReadonlySimpleVector3, SimpleVector3, Vector3 } from "../math";
import { Quaternion } from "../math/quaternion";

/**
 * const yaw = () => -atan2f( x,z )
 * const pitch = () => atan2f( y, sqrtf( x*x+z*z ) )
 */

export class Transform {
    private _position             = new Vector3();
    private _rotation             = new Quaternion();
    private _scale                = new Vector3(1, 1, 1);
    protected readonly _transformationMatrix = Mat4.create();

    // public lookAt(target: SimpleVector3): void {
    //     mat4.getRotation(
    //         this._rotation,
    //         mat4.targetTo(
    //             mat4.create(),
    //             this._position.toArray(),
    //             [target.x, target.y, target.z],
    //             [0, 1, 0]
    //         )
    //     );
    //     this.updateTransformationMatrix();
    // }

    public clone(): Transform {
        const result = new Transform();

        result._position = this._position.clone();
        result._scale    = this._scale.clone();
        result._rotation = this._rotation.clone();
        result.updateTransformationMatrix();

        return result;
    }

    public move(offset: ReadonlySimpleVector3): void {
        this._position.add(offset);
        this.updateTransformationMatrix();
    }

    public get transformation(): Mat4 {
        return this._transformationMatrix;
    }

    private updateTransformationMatrix(): Mat4 {
        return Mat4.fromRotationTranslationScale(
            this._rotation,
            this._position,
            this._scale,
            this._transformationMatrix,
        );
    }

    /**
     *
     * @param x - rotation about X axis in radians
     * @param y - rotation about Y axis in radians
     * @param z - rotation about Z axis in radians
     */
    public setEulerRotation(x: number, y: number, z: number): void {
        Quaternion.fromEuler(x, y, z, this._rotation);
        this.updateTransformationMatrix();
    }

    public get rotation(): Quaternion {
        return this._rotation;
    }

    public set rotation(rotation: Quaternion) {
        this._rotation.set(rotation);
        this.updateTransformationMatrix();
    }

    public setPosition(x: number, y: number, z: number): void {
        this._position.setData(x, y, z);
        this.updateTransformationMatrix();
    }

    public set position(position: ReadonlySimpleVector3) {
        this._position.setData(position.x, position.y, position.z);
        this.updateTransformationMatrix();
    }

    public get position(): ReadonlySimpleVector3 {
        return this._position;
    }

    public setScale(x: number, y: number, z: number): void {
        this._scale.setData(x, y, z);
        this.updateTransformationMatrix();
    }

    public set scale(scale: Vector3) {
        this._scale.set(scale);
        this.updateTransformationMatrix();
    }

    public get scale(): Vector3 {
        return this._scale;
    }
}
