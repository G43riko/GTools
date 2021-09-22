import { Mat4, SimpleVector3, Vector3 } from "../math";
import { Quaternion } from "../math/quaternion";
import { Transform } from "./transform";

/**
 * @see https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/glib2/math/transforms/TransformHierarchy.java
 * @see https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/test/java/org/glib2/math/TransformHierarchyTest.java
 */
export class HierarchicalTransform extends Transform {
    private _parent?: HierarchicalTransform;
    private readonly _parentTransformation = Mat4.create();
    private readonly _oldPosition          = new Vector3();
    private readonly _oldRotation          = new Quaternion();
    private readonly _oldScale             = Vector3.ONE;

    private hasChange(): boolean {
        if (this._parent?.hasChange()) {
            return true;
        }

        if (!Vector3.equals(this.position, this._oldPosition)) {
            return true;
        }

        if (!Quaternion.equals(this.rotation, this._oldRotation)) {
            return true;
        }

        return !Vector3.equals(this.scale, this._oldScale);
    }

    public update(): void {
        this._oldPosition.set(this.position);
        this._oldRotation.set(this.rotation);
        this._oldScale.set(this.scale);
    }

    public setParent(parent: HierarchicalTransform): void {
        this._parent = parent;
    }

    public get transformation(): Mat4 {
        return Mat4.multiply(this.parentMatrix(), this._transformationMatrix);
    }

    private parentMatrix(): Mat4 {
        if (this._parent?.hasChange()) {
            this._parentTransformation.set(this._parent.transformation);
        }

        return this._parentTransformation;
    }

    public get transformedPos(): SimpleVector3 {
        return this.parentMatrix().getTransformedVector(this.position);
    }

    public get transformedRot(): Quaternion {
        if (!this._parent) {
            return this.rotation;
        }

        return Quaternion.multiply(this._parent.transformedRot, this.rotation);
    }
}
